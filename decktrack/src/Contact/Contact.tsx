

function Contact() {

    return (
    <>
    <ContactCard/>

    
    </>
    
    
    );
    
    
    
    }

function ContactCard () {

    return (
    <>
      <div className="border-2 border-black rounded-md p-4 max-w-md mx-auto">
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name
          <NameBox/>
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
           Email 
           <EmailBox/>
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">Message 
        <MessageBox/>
        </label>
        </div>
    </form>
    </div>


    </>

    );

    function NameBox () {

        return (
        <>
        <h1>Test</h1>
        
        </>

        );


    }

    function EmailBox () {

        return (
        <>
             <h1>Test</h1>
        </>

        );


    }

    function MessageBox () {

        return (
        <>
             <h1>Test</h1>
        </>

        );


    }


}
    
    export default Contact;