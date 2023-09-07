import { ListGroup } from "react-bootstrap";

const TopicCard = ({ topic }) => {
  return (
    <ListGroup>
      <ListGroup.Item as="li">
        <div className="ms-2 me-auto">
          <div div="true" className="fw-bold">
            {topic.slug}
          </div>
          {topic.description}
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        action
        variant="info"
        href={`/articles?topic=${topic.slug}`}
      >
        View articles
      </ListGroup.Item>
    </ListGroup>
  );
};
export default TopicCard;
