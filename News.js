
import React from 'react';
import WebView from 'react-native-webview';

const News=()=>{
    return(
        <WebView
        source={{uri:'https://economictimes.indiatimes.com/topic/farmers'}}
        />
    )
}
export default News;