import { SetStateAction, useState } from "react";


function DeckInput() {

    const [text, setText] = useState("");
    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
      setText(event.target.value);
    };

return (

    <form>
    <input className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-full py-3 px-6"
      type="text" 
      value={text} 
      onChange={handleChange} 
      placeholder="Enter text here"
    />
   
    </form>

);

}

function DeckName () {

    return (
    <div className="border-2 border-black rounded-md p-4 max-w-md mx-auto">
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Deck Name
        </label>
        <div className="flex items-center space-x-16">
          <DeckInput />
          <button className="text-black bg-blue-200 px-4 py-2 rounded-md hover:bg-blue-300">
            Add Deck
          </button>
        </div>
      </div>
    </form>
  </div>
    );

}


function DeckColor () {




}

function Track() {

 

  return (

    <>
    <div>
    
    <DeckName/>




   </div>
   </>
    

  );
}

export default Track;
