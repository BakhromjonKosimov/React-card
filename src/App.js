import './App.css';
import Card from './components/Card'

function App() {
  return (
   <>
    <div className="wrapper">
      <Card        
          img="https://image.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg"
          title="Delicious Meal"
          description="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque magni corrupti laboriosam nemo nostrum saepe officiis at blanditiis repellat ipsam?"
      />

        <Card        
          img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-641260604-1584036604.jpg?crop=0.777xw:1.00xh;0.113xw,0&resize=480:*"
          title="Finger Licking Soup"
          description="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque magni corrupti laboriosam nemo nostrum saepe officiis at blanditiis repellat ipsam?"
        />
        <Card        
          img="https://www.lemontreedwelling.com/wp-content/uploads/2020/04/chef-salad-featured-720x720.jpg"
          title="Salad"
          description="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque magni corrupti laboriosam nemo nostrum saepe officiis at blanditiis repellat ipsam?"
        />
     
        
    </div>
   </>
  );
}

export default App;
