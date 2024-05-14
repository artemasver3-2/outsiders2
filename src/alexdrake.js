import Header from "./header";
import Footer from "./footer";
import Card from "./card";

function AlexDrake() {
  
    return (
      <>
       <Header 
       headerStyle="alexDrakeHeader"/>
      
      <div className="main-body">
        <Card 
        title="Inside The Mind Of"
        subtitle="Alex [REDACTED] Drake?"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis."
        />
      </div>
      
       <Footer />
      </>
    );
  }
  
  export default AlexDrake;