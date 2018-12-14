import React from 'react'
import '../css/ModalSearch.css'
import '../css/Card.css'

import {Avatar, Icon, List} from 'antd';
import {connect} from "react-redux";

const Card = ({ search }) => {

    const IconText = ({ type, text }) =>
        <span>
            <Icon type={type} style={{ marginRight: 8 }} />
            {text}
        </span>;



    function categories(category) {
        return category.replace(/_/g, " ");
    }

    function genry(genry) {
        let genryString = '';
        debugger;
        genry.map(currentGenry => genryString = genryString + currentGenry.name + ' ')
        return genryString;
    }

    return (
        <div className="card push-back">
            <List
                itemLayout="vertical"
                size="middle"
                pagination={{
                    pageSize: 10,
                }}
                dataSource={search.data.apps}
                footer={<div><b>Find Your App</b></div>}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[<IconText type="star-o" text={item.rating} />,
                            <IconText type="message" text={item.reviewsQty} />,
                            <IconText type="download" text={item.installsQty}/>,
                            <IconText type="dollar" text={item.price} />,
                            <IconText type="info-circle" text={item.androidVersion.name} />]}
                        extra={<img width={272} alt="logo" src="https://via.placeholder.com/150x90" />}
                    >
                        <List.Item.Meta
                            title={item.name}
                            description=""
                        />
                        Genry: {genry(item.genry)}<br/>
                        Category: {categories(item.category.name)}<br/>
                        Type: {item.type.name}<br/>
                        Content Rating: {item.contentRating}<br/>
                        Size: {item.size}<br/>
                    </List.Item>
                )}
            />
        </div>
    );


};

export default connect (({ search }) => ({ search }), dispatch => {})(Card);
