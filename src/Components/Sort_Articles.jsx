import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const SortArticles = () => {
  const [sortingBy, setSortingBy] = useState("created_at");
  const [orderingBy, setOrderingBy] = useState("desc");
  const navigate = useNavigate();
  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortingBy(value);
  };

  const handleOrderChange = (event) => {
    const value = event.target.value;
    setOrderingBy(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/articles?sort_by=${sortingBy}&order=${orderingBy}`);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Select required={true} onChange={handleSortChange}>
          <option>Sort By</option>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </Form.Select>
        <Form.Select required={true} onChange={handleOrderChange}>
          <option>Order</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Form.Select>
        <Button type="submit">Sort and order</Button>
      </Form>
    </div>
  );
};

export default SortArticles;

{
  /* <div>
      <Dropdown>
        <Dropdown.Toggle variant="Info">Sort by</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/articles?sort_by=created_at">
            Date
          </Dropdown.Item>
          <Dropdown.Item href="/articles?sort_by=comment_count">
            Comment Count
          </Dropdown.Item>
          <Dropdown.Item href="/articles?sort_by=votes">Votes</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="Info">Order</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/articles?order=asc">Ascending</Dropdown.Item>
          <Dropdown.Item href="/articles?order=desc">Descending</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div> */
}
