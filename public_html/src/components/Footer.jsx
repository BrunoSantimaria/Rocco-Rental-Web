import { Icon } from "@iconify/react";
export const Footer = () => {
  return (
    <div className='bg-color1 flex justify-between h-20 w-full border-color2 border-t-xsm z-10'>
      <div className='flex w-3/6 justify-evenly text-center mx-auto mt-5'>
        <Icon
          icon='devicon-plain:facebook'
          width={"2.5em"}
          className='cursor-pointer text-color3 transition-colors hover:text-color2'
        />

        <Icon
          icon='teenyicons:instagram-solid'
          width={"2.5em"}
          className='cursor-pointer text-color3 transition-colors hover:text-color2'
        />
      </div>
    </div>
  );
};
