/* eslint-disable no-unused-vars */
import React, { Component, useState, useEffect } from 'react';
import content from './db/data.json';
import Topic from './components/topic';
import PropTypes from 'prop-types';
import Navigation from './components/Navigation';

import {
	Button,
	Container,
	Divider,
	Grid,
	Header,
	Icon,
	Image,
	List,
	Menu,
	Responsive,
	Segment,
	Sidebar,
	Visibility
} from 'semantic-ui-react';

import getImage from './images/images';

function App() {
	const [topic, setTopic] = useState({
		title: 'title',
		icon:'',
		image:'',
		text: 'intro',
		date: '01-01-2019',
		location: 'pleinlaan 2, 1050 ixelles, BE'
	});

	const [currentView,setCurrentView] = useState('Food');
	const onNavBarClick = name => {
		console.log(name);
		setCurrentView(name);
		TopicContent();	
	};
  
  
	const TopicContent = ()=>{
		const c = content.find((c) =>{if(c.title === currentView){return c;}
		});
		setTopic(c);
		console.log(c.title);
		if(!c.title.includes('About')){
			return(
				<Responsive>
					<Header
						as='h1'
						content={topic.title}
						style={{
							textAlign:'center',
							fontSize:'4em',
							fontWeight: 'normal',
							marginTop:'1em',
							marginBottom:'1em'
						}}/>
					<Container 
						style={{
							textAlign:'center',
						}}>
						{topic.text}
					</Container>
				</Responsive>
			);
		}else{
			return(
				<Responsive>
					<Header
						as='h1'
						content={topic.title}
						style={{
							textAlign:'center',
							fontSize:'2em',
							fontWeight: 'normal',
							marginTop:'1em',
							marginBottom:'1em'
						}}/>
					<Container 
						style={{
							textAlign:'center',
						}}>
						{topic.text}
					</Container>
					<List link>
						<List.Item as='a'>{c.location}</List.Item>
						<List.Item as='a'>{'blah at blah'}</List.Item>
						<List.Item as='a'>{c.date}</List.Item>
					</List>
				</Responsive>
			);	
		}
			
	};
  
	return (
		
		<Grid  columns={2} textAlign='center'>
			<Grid.Column width={2}>
				<Navigation content={content} onNavBarClick={onNavBarClick}/>
			</Grid.Column>
			<Grid.Column>
				<Segment style={{}}>
					<Image fluid rounded src={getImage(topic.title)}/>
					<TopicContent/>
				</Segment>
			</Grid.Column>
		</Grid>


	
	);
}

/*
		<Grid  style={{ marginTop:50, marginBottom:50, color:'black', height: '50vh' }} verticalAlign='middle'>
			<Segment raised>
				<Grid.Column>
					<Navigation content={content}/>
				</Grid.Column>
				<Grid.Column inverse style={{ maxWidth: 600 }}>
					<Image fluid rounded src={getImage(topic.title)}/>
    	<TopicContent/>
				</Grid.Column>
			</Segment>
		</Grid>

*/
/*
<Grid textAlign='center'style={{heigth:200}} verticalAlign='middle' celled='internally'>
			<Grid.Row>
				<Grid.Column style={{maxWidth:800}}>
					<Image src='/images/wireframe/centered-paragraph.png' />
				</Grid.Column>
			</Grid.Row>

			<Grid.Row>
				<Grid.Column style={{maxWidth:800}}>
			
				</Grid.Column>
			</Grid.Row>
		</Grid>
<Grid textAlign='center' style={{heigth:200}} verticalAlign='middle'>
				<Grid.Column style={{maxWidth:800}}>
				</Grid.Column>
			</Grid>

 <Container text>
        <Header
          as="h1"
          content="Global Shapers"
          color="orange"
          textAlign="center"
          style={{
            fontSize: "5em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "4em"
          }}
        />
      </Container>
<Container text>
      <Header
        as='h1'
        content = 'Global Shapers'
        color='orange'
        style={{
          fontSize:'4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop:'4em'
        }}
      />
    </Container>

   <Container>
    <div className="background">
      <div className="topic_box_container">
        <div className="topic_item">
          <h1 className="title">{topic.title}</h1>
          <div className="text_box">
            <p className="text">{topic.intro}</p>
          </div>
          <div className="text_box">
            <p className="text">{topic.exp_intro}</p>
          </div>
          <div className="date">{topic.date}</div>
          <div className="location">{topic.location}</div>
        </div>
      </div>
    </div>
    </Container>

*/

export default App;
