import React, { useState, useEffect } from 'react';

const NotificationList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://crm-lara-mongo-7azts5zmra-uc.a.run.app/api/dynamic-notification?markerId=65deedcd9135274171b0faa5&type=all');
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-white'>
      {/* <h1>Data Table</h1> */}
      <table className='w-full pr-4'>
        <thead className='border-b-2'>
          <tr className=' text-[22px]'>
            <th>Time</th>
            <th>Title</th>
            <th>Audience</th>
            <th>Body</th>
            <th>Content Type</th>
            <th>Content Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
                <td className='pl-4'>{item.updated_at}</td>
              <td>{item.title}</td>
              <td>{item.audience_count}</td>
              <td>{item.body}</td>
              <td>{item.content_type}</td>
              <td>
                {item.content_type === 'image' ? (
                  <img src={item.content_body} alt="content" style={{ maxWidth: '100px' }} />
                ) : (
                  item.content_body
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NotificationList;
