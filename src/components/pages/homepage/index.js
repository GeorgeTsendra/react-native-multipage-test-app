import React, {Component} from 'react';
import {
    StyleSheet, Text, View, TextInput, Button, Linking, ScrollView
  } from 'react-native';
//redux
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as HomepageActions from '../../../actions/homepageActions';

import {BITCOINS, BUSINESS, APPLE, TECHCRUNCN, WSTREET } from '../../../constants/tabs';
//components
import PageTemplate from '../pageWrapper'
import NewsItem from './acticleItem'


class Homepage extends Component {
  
  componentDidMount(){
    const {
      activeTab,
    } = this.props;

    if(activeTab === BITCOINS){
      this.props.actions.getBictoinsData()
    }else if(activeTab === BUSINESS){
      this.props.actions.getBusinessData()
    }else if(activeTab === APPLE){
      this.props.actions.getAppleData()
    }else if(activeTab === TECHCRUNCN){
      this.props.actions.getTechCrunchData()
    }else if(activeTab === WSTREET){
      this.props.actions.getWallStreetData()
    }
  }
  

  componentWillReceiveProps(nextProps){
    const {
      activeTab,
    } = nextProps;
    if(this.props.activeTab !== activeTab){

    if(activeTab === BITCOINS){
      this.props.actions.getBictoinsData()
    }else if(activeTab === BUSINESS){
      this.props.actions.getBusinessData()
    }else if(activeTab === APPLE){
      this.props.actions.getAppleData()
    }else if(activeTab === TECHCRUNCN){
      this.props.actions.getTechCrunchData()
    }else if(activeTab === WSTREET){
      this.props.actions.getWallStreetData()
    }
    }
  }

  renderNewsItem = (articles) => {
    
    return (
      <ScrollView>
          {articles.map((value,index)=>{
            return (
              <NewsItem 
                data = {value}
                key={index}
              />
            )
          })}
       </ScrollView> 
    )
  }

  render() { 
    const {
      newsData = null,
      activeTab,
    } = this.props

    if(!newsData) return (
      <PageTemplate> 
        <View  style={styles.pageWrapper}>
          <Text> Loading... </Text>
        </View>
      </PageTemplate>
    )


    return (
      <PageTemplate> 
        <View  style={styles.pageWrapper}>
          {
            this.renderNewsItem(newsData.articles)
          }
        </View>
      </PageTemplate>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(HomepageActions, dispatch),
  }  
}

const mapStateToProps = function(state) {
  return {
    newsData: state.newsPagesReducer.newsData,
    activeTab: state.newsPagesReducer.activeTab,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);


const styles = StyleSheet.create({
  pageWrapper: {
    width: '100%',
    height: '76%',
  },
});

