import { useParams } from 'react-router-dom';


export default function EcommerceSections() {
    const { section } = useParams<{ section: string }>();
  return (
    <div className="p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
        <div>EcommerceSections</div>
    </div>
  )
}
