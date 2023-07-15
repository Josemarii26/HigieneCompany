import React from 'react'


export const Footer = () => {
    return (
        <div className="col-md-12">
        <footer class="text-center">

            <div class="container-fluid p-4 pb-0">

                <section class="mb-4">

                    <a  id='facebook'
                        class="btn text-white btn-floating m-1"
                        href="#!"
                        role="button"
                    ><i class="fab fa-facebook-f"></i
                    ></a>


                    <a  id='twitter'
                        class="btn text-white btn-floating m-1"
                        href="#!"
                        role="button"
                    ><i class="fab fa-twitter"></i
                    ></a>


                    <a  id='google'
                        class="btn text-white btn-floating m-1"
                        href="#!"
                        role="button"
                    ><i class="fab fa-google"></i
                    ></a>


                    <a  id='instagram'
                        class="btn text-white btn-floating m-1"
                        href="#!"
                        role="button"
                    ><i class="fab fa-instagram"></i
                    ></a>
                </section>

            </div>
            <div class="text-center p-3" id='final'>
                © 2023 Copyright:
                <a class="text-white" href="https://mdbootstrap.com/">Paginaquemediga.com</a>
            </div>

        </footer>
        </div>
    )
}
