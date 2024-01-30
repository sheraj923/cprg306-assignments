// student-info.js

import Link from 'next/link';
const StudentInfo = () => {
  return (
    <div>
      <p>Your Name: Sheraj Thabal</p>
      <p>
        GitHub Repository:{' '}
        <Link href="https://github.com/sheraj923/cprg306-assignments.git">
            Your GitHub Repository
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
