import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 0rmFrziETSaOmTnQRTMkt6iSWmwovvPYbGLsY-bOSbUr5HDxlzC4yfR-E4Hij4hAuhYXRNPWLucSF2to-S9e0Ex4wQuyUXRABNUm8zo234dzvhkaJZBTdII5sTytX3Yx",
  },
});
