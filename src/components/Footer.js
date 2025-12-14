export default function Footer(){
  return (
    <footer className='bg-white border-t mt-12'>
      <div className='max-w-6xl mx-auto px-4 py-6 text-center text-gray-600'>
        © {new Date().getFullYear()} Jyoti's Beauty Parlour • Created by Prem
      </div>
    </footer>
  );
}