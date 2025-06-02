import React, { lazy, Suspense } from 'react';
import Users from './Users';

const UserLazy = lazy(() => import('./Users'));

function ListUsers() {
  return (
    <>
    <Suspense fallback={"loadijhghghhhghgng..."}>
        <h1>List users</h1>
        <UserLazy/>
    </Suspense>
    </>
  );
}

export default ListUsers;
