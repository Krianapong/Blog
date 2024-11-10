import React from 'react';
import Footer from './Footer';

const MainContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <main className="w-4/5 bg-green-50 p-10">{children}<Footer/></main>;
};

export default MainContent;
