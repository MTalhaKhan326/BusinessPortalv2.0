import React, { useState, useEffect } from 'react';
import DashboardTemplate from '../../Components/Templates/DashboardTemplate.jsx';
import { useQuery } from 'react-query';
import { formatTimestamp, hasUrduCharacters } from '../../utils/helpers.js';
import ShowMoreText from "react-show-more-text";


const NotificationList = () => {
  const query = useQuery("notifData", async () => {
    let res = await fetch('https://crm-lara-mongo-7azts5zmra-uc.a.run.app/api/dynamic-notification?markerId=65deedcd9135274171b0faa5&type=all').then(res => res.json())
    return res.data 
  })
  const tdClasses = `p-2 border-[1px] border-slate-100`

  return (
    <DashboardTemplate pageTitle={'Notification Data'}>
      <div className='bg-white'>
        {/* <h1>Data Table</h1> */}
        <table className='w-full pr-4'>
          <thead className='border-b-2'>
            <tr className=''>
              <th>Time</th>
              <th>Title</th>
              <th>Audience</th>
              <th>Body</th>
              <th>Content Type</th>
              <th>Content Body</th>
            </tr>
          </thead>
          <tbody>
            {query.data?.map(item => (
              <tr key={item.id} className='border-b-2 border-slate-200'>
                <td className={'w-[15%] ' + tdClasses}>{formatTimestamp( item.updated_at )}</td>
                <td className={'w-[20%] ' + ( hasUrduCharacters(item.title) ? "ur" : "" ) + " " + tdClasses}>{item.title}</td>
                <td className={'w-[5%] ' + tdClasses}>{item.audience_count}</td>
                <td className={'w-[20%] ' + ( hasUrduCharacters(item.title) ? "ur" : "" ) + " "  + tdClasses}>{item.body}</td>
                <td className={tdClasses}>{item.content_type}</td>
                <td className={tdClasses}>
                  {item.content_type === 'image' ? (
                    <img src={item.content_body} alt="content" style={{ maxWidth: '100px' }} />
                  ) : (
                    <ShowMoreText lines={3} className={( hasUrduCharacters(item.title) ? "ur" : "" )}>{item.content_body}</ShowMoreText>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardTemplate>
  );
};

export default NotificationList;
