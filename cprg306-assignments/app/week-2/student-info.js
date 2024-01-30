// student-info.js

import Link from 'next/link';
const StudentInfo = () => {
  return (
    <div>
      <p>Your Name: Sheraj Thabal</p>
      <p>
        GitHub Repository:{' '}
        <Link href="">
            Your GitHub Repository
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
