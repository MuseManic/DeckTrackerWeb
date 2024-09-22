

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
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
           Email 
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">Message 
        </label>
        </div>
    </form>
    </div>


    </>

    );

    function NameBox () {

        return (
        <>
        
        </>

        );


    }

    function EmailBox () {

        return (
        <>
        
        </>

        );


    }

    function MessageBox () {

        return (
        <>
        
        </>

        );


    }


}
    
    export default Contact;