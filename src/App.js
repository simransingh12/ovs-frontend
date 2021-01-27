import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginComponent from './Components/LoginComponent'
import HomeComponent from './Components/HomeComponent'
import RegisterComponent from './Components/RegisterComponent'
import MyProfile from './Components/MyProfile';
import ViewAllVegetable from './Components/VegetableComponents/ViewAllVegetable';
import LessThan20 from './Components/VegetableComponents/LessThan20';
import MoreThan101 from './Components/VegetableComponents/MoreThan101';
import Between21to50 from './Components/VegetableComponents/Between21to50';
import Between51to100 from './Components/VegetableComponents/Between51to100';
import CreateVegetable from './Components/VegetableComponents/CreateVegetable';
import ByTypeLeafyGreen from './Components/VegetableComponents/ByTypeLeafyGreen'
import ByTypeCruciferous from './Components/VegetableComponents/ByTypeCruciferous'
import ByTypeMarrow from './Components/VegetableComponents/ByTypeMarrow'
import ByTypeRoot from './Components/VegetableComponents/ByTypeRoot'
import ByTypeEdibleplantSteam from './Components/VegetableComponents/ByTypeEdiblePlantSteam'
import ByTypeAllium from './Components/VegetableComponents/ByTypeAllium'
import Cart from './Components/CartComponents/Cart'
import UpdateVegetableComponent from './Components/VegetableComponents/UpdateVegetableComponent';
import ViewVegetableById from './Components/VegetableComponents/ViewVegetableById';
import ViewAllVegetableByCustomer from './Components/VegetableComponents/ViewAllVegetableByCustomer';
import GiveFeedbackComponenet from './Components/GiveFeedbackComponenet';
import AdminViewFeedback from './Components/AdminViewFeedback';
import CustomerViewFeedback from './Components/CustomerViewFeedback';
import feedbackDate from './Components/feedbackDate';
import FeedbackRating from './Components/FeedbackRating';
import adminOrder from './Components/adminOrder';
import AdminMenu from './Components/AdminMenu';
import orderdate from './Components/orderdate';
import paymentdate from './Components/paymentdate'
import viewAllPayment from './Components/viewAllPayment';
import ForgotPasswordComponent from './Components/ForgotPasswordComponent';
import FooterComponent from './Components/FooterComponent';
import CustomerPayment from './Components/CustomerPayment';
import CustomerOrder from './Components/CustomerOrder';

function App() {
  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <Header />
          <div className="container">
            <switch>
              <Route path="/" exact strict component={HomeComponent}></Route>
              <Route path="/login" exact strict component={LoginComponent}></Route>
              <Route path="/register" exact strict component={RegisterComponent}></Route>
              <Route path="/myProfile" exact strict component={MyProfile}></Route>
              <Route path="/forgot" exact strict component={ForgotPasswordComponent}></Route>
              <Route path="/viewVegetable" exact component={ViewAllVegetable}></Route>
              <Route path="/vegetable" exact component={ViewAllVegetableByCustomer}></Route>
              <Route path="/getByVegetablePriceLessThan20" exact component={LessThan20}></Route>
              <Route path="/getByVegetablePriceGreaterThan100" exact component={MoreThan101}></Route>
              <Route path="/getByVegetablePriceBetween21to50" exact component={Between21to50}></Route>
              <Route path="/getByVegetablePriceBetween51to100" exact component={Between51to100}></Route>
              <Route path="/getByVegetableTypeLeafygreen" exact component={ByTypeLeafyGreen}></Route>
              <Route path="/getByVegetableTypeCruciferous" exact component={ByTypeCruciferous}></Route>
              <Route path="/getByVegetableTypeMarrow" exact component={ByTypeMarrow}></Route>
              <Route path="/getByVegetableTypeRoot" exact component={ByTypeRoot}></Route>
              <Route path="/getByVegetableTypeEdiblePlantSteam" exact component={ByTypeEdibleplantSteam}></Route>
              <Route path="/getByVegetableTypeAllium" exact component={ByTypeAllium}></Route>
              <Route path="/add-vegetable" exact component={CreateVegetable}></Route>
              <Route path="/update-vegetable/:id" exact component={UpdateVegetableComponent}></Route>
              <Route path="/view-vegetable/:id" exact component={ViewVegetableById}></Route>
              <Route path="/Cart/:email" component={Cart}></Route>
              <Route path="/giveFeedback" exact component={GiveFeedbackComponenet}></Route>
              <Route path="/adminViewFeedback" exact component={AdminViewFeedback}></Route>
              <Route path="/customerViewFeedback" exact component={CustomerViewFeedback}></Route>
              <Route path="/feedbackDate" exact component={feedbackDate}></Route>
              <Route path="/feedbackRating" exact component={FeedbackRating}></Route>
              <Route path="/orders" component={adminOrder}></Route>
              <Route path="/orderDate" component={orderdate}></Route>
              <Route path="/payments" component={viewAllPayment}></Route>
              <Route path="/paymentDate" component={paymentdate}></Route>
              <Route path="/adminMenu" component={AdminMenu}></Route>
              <Route path="/order" component={CustomerOrder}></Route>
              <Route path="/viewMyListOfVegs" component={CustomerPayment}></Route>
              <Route path = "/Cart" component= {Cart}></Route>
            </switch>
          </div>
        </header>
        <FooterComponent></FooterComponent>
      </div>
    </Router>
  );
}

export default App;
