import Pagination from 'react-bootstrap/Pagination';

const PaginationBlog = ({ active, total,setNextPage }) => {
  const paginationItems = Array.from({ length: total }, (_, index) => index + 1);

  return (
    <div>
      <Pagination size="sm">
        {paginationItems.map(number => (
          <Pagination.Item onClick={() => setNextPage(number)} key={number} active={number === active}>
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  )
}

export default PaginationBlog