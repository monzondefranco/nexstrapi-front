import { useEffect, useState } from 'react';
import api from '@/app/dataLayer/api';
import RealtorsCard from '../realtors/RealtorsCard';

async function getRealtors() {
  try {
    const { data: realtors } = await api.realtors.get({
      query: {
        fields: ['firstName', 'lastName', 'email', 'bio'],
      },
    });
    return realtors || []
  } catch (error) {
    console.error('Error fetching realtors:', error);
    return []
  }
}

export default async function HomePage() {

      const realtors = await getRealtors()

  return (
    <div className={styles.container}>
      {realtors.map((realtor, indx) => (
        <div key={indx} className={styles.card}>
        <div className="p-5">
            <h1 className={styles.name}>{realtor?.attributes.firstName}</h1>
            <p className={styles.bio}>{realtor?.attributes.bio}</p>
        </div>
    </div>
      ))}
    </div>
  );
}

const styles = {
  container: 'flex min-h-screen flex-col items-center justify-between p-24',
  card: 'max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700',
  name: 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white',
  bio: 'mb-3 font-normal text-gray-700 dark:text-gray-400',
}
