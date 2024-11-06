import api from "../utils/api";

// import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";

export default function useAuth() {
  async function register(usuario) {
    try {
      const data = await api
        .post("/users/register", usuario)
        .then((response) => {
          return response.data;
        });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return { register };
}
