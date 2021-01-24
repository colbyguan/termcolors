import logo from './logo.svg';
import { SECTIONS } from './constants'
import CopyableItem from './components/CopyableItem'
import Notifs from './components/Notifs'
import copy from 'copy-to-clipboard';
import { useRef } from 'react';

function App() {
  const notifs = useRef(null)
  const handleItemClick = (code) => {
    console.log(code)
    copy(code)
    console.log(notifs)
    notifs.current.addNotif('copied ' + code)
  }

  return (
    <div className="container relative mx-auto">
      <Notifs ref={notifs} message='copied code' />
      <div className="text-4xl my-10">Copy Paste Terminal Color Codes</div>
      {SECTIONS.map(section => {
        return (
          <div>
            <div className="font-2xl">{section.name}</div>
            <div className="flex flex-row flex-wrap font-mono">
              {Object.entries(section.items).map(([label, code]) => (
                <CopyableItem itemStyles={section.itemStyles} label={label} code={code} handleItemClick={handleItemClick} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
