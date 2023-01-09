import './Css/Navbar.css'
const Footer=()=>{
    return(
        <div class="d-flex flex-column h-100">

    <section class="hero text-white py-5 flex-grow-1">
        <div class="container py-4">
            <div class="row">

                <div class="col-lg-6">
                    <h3 class="display-4">Donate Blood Save Life</h3>
                    <p class="fst-italic text-muted">
                    Everyone between the ages of 17 and 65 can donate blood. Men can give blood after every three months while women after every four. Donating blood is also very beneficial for your physical and emotional health.

But remember,by donating your blood, you’re helping someone who might be battling blood diseases, undergoing treatment for cancer, or had sustained injuries in an accident.
                         <a class="text-primary" href="https://bootstrapious.com/" target="_blank">BloodDonation</a></p>
                </div>
            </div>
        </div>
    </section>



    <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 col-md-6">
                    <h5 class="h1 text-white">DONATION</h5>
                    <p class="small text-muted">We aim to ensure that all Canadians make these life-saving decisions upon renewing their driver’s license or their health card.</p>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Quick links</h5>
                    <ul class="list-unstyled text-muted">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Get started</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Quick links</h5>
                    <ul class="list-unstyled text-muted">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Get started</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-3">Newsletter</h5>
                    <p class="small text-muted">We aim to ensure that all Canadians make these life-saving decisions upon renewing their health card.</p>
                    <form action="#">
                        <div class="input-group mb-3">
                            <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                            <button class="btn btn-primary" id="button-addon2" type="button"><i class="fas fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
</div>
    )
}
export default Footer;