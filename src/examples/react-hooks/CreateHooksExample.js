import React, {useEffect} from "react";

const usePageBottom = () => {
  const [isBottom, setIsBottom] = React.useState(false);

  useEffect(() => {
    const handleBottomScroll = () => {
      const isBottom = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
      setIsBottom(isBottom);
    }
    window.addEventListener("scroll", handleBottomScroll);
    return () => {
      window.removeEventListener("scroll", handleBottomScroll);
    };
  }, []);

  return { isBottom };
}

const CreateHooksExample = () => { 
    const { isBottom } = usePageBottom();
    console.log('isBottom', isBottom)
    return <div style={{ height: 1000 }}>scroll to bottom: {isBottom.toString()}</div>
}

export default CreateHooksExample
