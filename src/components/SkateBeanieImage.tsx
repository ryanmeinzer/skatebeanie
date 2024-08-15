import Image from 'next/image'
import skateBeanieImage from '../SkateBeanie.jpeg'
 
export default function Page() {
  return (
    <Image
      src={skateBeanieImage}
      width={250}
      height={250}
      alt="Picture of the SkateBeanie"
    />
  )
}