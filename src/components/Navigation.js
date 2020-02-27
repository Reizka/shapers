/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import {Header,Image, Grid, Menu,Responsive, Segment, Icon, Sidebar, Container } from 'semantic-ui-react';

export default class Navigation extends Component {
  state = { activeItem: 'Main'};
  handleItemClick = (e, { name }) => {
  	this.setState({ activeItem: name });
	  this.props.onNavBarClick(name);
  };

  render() {
  	const {activeItem} = this.state;
	  
  	const mappedMenuItems = content => {
  		const map = content.map(c => (
  		<>
  				<Responsive minWidth={500} >
  					<Menu.Item
  						name={c.title}
  						active={activeItem === c.title}
  						onClick={this.handleItemClick}
  					>
  						{c.title}
  						<Icon name={c.icon}/>
  					</Menu.Item>
  				</Responsive>
  				<Responsive maxWidth={499}>
  					<Menu.Item
  						icon={c.icon}
  						active={activeItem === c.title}
  						onClick={this.handleItemClick}
  					/>
  				</Responsive>
  			</>
  		));
  		return map;
  	};

  	return (	 
  		<Menu fluid vertical tabular icon='labeled'>
  		{mappedMenuItems(this.props.content)}
	  </Menu>
  	);
  }
}

/** 
const mappedMenuItems = content => {
  		const map = content.map(c => (
  		<>
  				<Responsive minWidth={500} >
  					<Menu.Item
  						name={c.title}
  						active={activeItem === c.title}
  						onClick={this.handleItemClick}
  					>
  						{c.title}
  						<Icon name={c.icon}/>
  					</Menu.Item>
  				</Responsive>
  				<Responsive maxWidth={499}>
  					<Menu.Item
  						icon={c.icon}
  						active={activeItem === c.title}
  						onClick={this.handleItemClick}
  					/>
  				</Responsive>
  			</>
  		));
  		return map;
  	};

  	return (	 
  		<Sidebar.Pushable as ={Segment}>
  			<Sidebar fluid
  				as={Menu}
  				animation='overlay'
  				≈
  				inverted
  				onHide={()=> this.setState({visible:false})}
  				vertical
  				visible={visible}
  				width='thin'>
  				{mappedMenuItems(this.props.content)}
  			</Sidebar>
			  
  			<Sidebar.Pusher>
  					<Menu.Item onClick = {() => this.setState({visible:true})}>
  						<Icon name="sidebar"/>
  					</Menu.Item> 	
  			</Sidebar.Pusher>
  		</Sidebar.Pushable>
  	);

 
*/