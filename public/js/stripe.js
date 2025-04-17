import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async tourId => {
    const stripe = Stripe('pk_test_51RBBRS4g4ndWAMg5bM5v0lBB7WECbSs1A7zGwkEumauKiUePEHe7lLmRFXjWsf9xC1KJetSpbfSSn10ggrgI5wrD00csvAw74G');
    try {
        // 1) Get checkout session from API
        const session = await axios(
            `/api/v1/bookings/checkout-session/${tourId}`
        );
        
        // 2) Create checkout form + charge credit card
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        });
    } catch (err) {
        console.log(err);
        showAlert('error', err);
    }
};