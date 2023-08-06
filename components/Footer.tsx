import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3">
      <div>
      {" "}

        <Link
  className="bg-white rounded-xl text-black font-bold px-4 py-3 sm:mt-10 mt-8 hover:bg-gray-200"
  href="/privacy"
>
Privacy
</Link>




<Link
  className="bg-white rounded-xl text-black font-bold px-4 py-3 sm:mt-10 mt-8 hover:bg-gray-200"
  href="/terms"
>
Terms
</Link>
    
        
      </div>
      
    </footer>
  );
}
