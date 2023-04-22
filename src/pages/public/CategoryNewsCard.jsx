import React from "react";
import { Card } from "react-bootstrap";
import moment from 'moment';
import { FaBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryNewsCard = ({ categoryNews }) => {
  const { _id, author,title,image_url,details} = categoryNews;
console.log(categoryNews)
  return (
    <>
      <Card>
        <Card.Header>
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                    <img src={author.img} alt="" style={{width:"40px"}} className="rounded-pill" />
                    <div className="d-flex flex-column">
                        <span className="fw-semibold">{author.name? author.name : "Unknown"}</span>
                        <span>{moment(author.published_date).format('yyyy-M-D')}</span>
                    </div>
                </div>
                <div>
                    <FaBookmark></FaBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </div>
        </Card.Header>
        <Card.Title className="my-4">{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Text>
         {details.length>200? details.split(0,200): details}.....
         <Link>Read more</Link>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </>
  );
};

export default CategoryNewsCard;
