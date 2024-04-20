import Image from 'next/image'
import { Popover } from './components/Popover'
import closeIcon from '/public/icons/x.svg'
export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Popover
        position="left"
        content={
          <div className="flex flex-col bg-white px-4">
            <h1 className="text-sm font-medium">Your password must have:</h1>
            <div className="flex flex-row items-center mt-[6px]">
              <Image src={closeIcon} alt="" className="ml-2 mr-[10px]" />
              <h1 className="text-xs">At least 8 characters</h1>
            </div>
            <div className="flex flex-row items-center mt-[6px]">
              <Image src={closeIcon} alt="" className="ml-2 mr-[10px]" />
              <div>
                <h1 className="text-xs">Upper case letter (e.g. ABC) &</h1>
                <h1 className="text-xs">Lower case letter (e.g. abc)</h1>
              </div>
            </div>
            <div className="flex flex-row items-center mt-[6px]">
              <Image src={closeIcon} alt="" className="ml-2 mr-[10px]" />
              <div>
                <h1 className="text-xs">At least one digit</h1>
                <h1 className="text-xs">(e.g. 0,1,2,3,4,...)</h1>
              </div>
            </div>
          </div>
        }
      >
        <div>
          <input placeholder="Password" />
        </div>
      </Popover>
      <Popover
        position="left"
        content={
          <div className="flex flex-col bg-white px-4">
            <h1 className="text-sm font-medium">Your password must have:</h1>
            <div className="flex flex-row items-center mt-[6px]">
              <Image src={closeIcon} alt="" className="ml-2 mr-[10px]" />
              <h1 className="text-xs">At least 8 characters</h1>
            </div>
            <div className="flex flex-row items-center mt-[6px]">
              <Image src={closeIcon} alt="" className="ml-2 mr-[10px]" />
              <div>
                <h1 className="text-xs">Upper case letter (e.g. ABC) &</h1>
                <h1 className="text-xs">Lower case letter (e.g. abc)</h1>
              </div>
            </div>
            <div className="flex flex-row items-center mt-[6px]">
              <Image src={closeIcon} alt="" className="ml-2 mr-[10px]" />
              <div>
                <h1 className="text-xs">At least one digit</h1>
                <h1 className="text-xs">(e.g. 0,1,2,3,4,...)</h1>
              </div>
            </div>
          </div>
        }
      >
        <div>
          <input placeholder="Confirm password" />
        </div>
      </Popover>
    </div>
  )
}
