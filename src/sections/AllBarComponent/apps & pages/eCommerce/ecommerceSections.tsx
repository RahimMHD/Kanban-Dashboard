

import { useParams } from 'react-router-dom';


export default function EcommerceSections() {
    const { section } = useParams<{ section: string }>();
  return (
    <div>EcommerceSections</div>
  )
}
