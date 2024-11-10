import React from 'react';
import { marked } from 'marked';
import resumeContent from '../docs/resume.mdx?raw'; // นำเข้า Markdown เป็น String

const Resume: React.FC = () => {
    const htmlContent = marked(resumeContent);

    return (
        <div className="prose w-max">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

            <a
                href="/resume.pdf"
                download="Krisanapong_Resume.pdf"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
                Download Resume
            </a>

        </div>
    );
};

export default Resume;
