import React, { useState, useContext, useEffect } from "react";

const itemsContext = React.createContext();
const upitemsContext = React.createContext();
export const SearchContext = React.createContext();

export function useItemsContext() {
  return useContext(itemsContext);
}

export function useUpItemsContext() {
  return useContext(upitemsContext);
}

export function useSearchContext() {
  return useContext(searchContext);
}

export default function UpProvider({ children }) {
  const [items, setItems] = useState([]);
  const [habitaciones, setHabitaciones] = useState([])
  const [listCategory, setListCategory] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  // const fetchData = async (load) => {
  //   if (load === true) {
  //     await fetch("http://localhost:4000/ListarItem")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setItems(data);
  //       })
  //       .catch((error) => console.error("Error:", error));
  //   } else {
  //     await fetch(`http://localhost:4000/FilterProducts/${inputSearch}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         data.length > 0 ? setItems(data) : setItems([]);
  //       })
  //       .catch((error) => console.error("Error:", error));
  //   }
  // };

  // const FiltrarCategory = async () => {
  //   await fetch(`http://localhost:4000/Filtrar_categorias/${filterCategory}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       filterCategory != "" ? setItems(data) : fetchData(true);
  //     })
  //     .catch((error) => console.error("Error:", error));
  // };

  // useEffect(() => {
  //   FiltrarCategory();
  // }, [filterCategory]);

  // const getCategory = async () => {
  //   await fetch("http://localhost:4000/Listar_categorias")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setListCategory(data);
  //     })
  //     .catch((error) => console.error("Error:", error));
  // };

  // const addCategory = async () => {
  //   const formData = new FormData();
  //   formData.append("name", subcategory);

  //   await fetch("http://localhost:4000/Agregar_categorias", {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => console.error("Error:", error));
  // };

  // useEffect(() => {
  //   fetchData(true);
  //   getCategory();
  // }, []);

  //Data de Agg
  // Estableciendo las variables
  const [image, setImage] = useState("");
  const [Tipo, setTipo] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Comodidad, setComodidad] = useState("");
  const [Tarifa, setTarifa] = useState("");
  const [Review, setReview] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  //Reset
  const reset = () => {
    setTipo("");
    setImage("");
    setDescripcion("");
    setComodidad("");
    setTarifa("");
    setReview("");
    setCantidad("");
    const form = document.getElementById("form_agg");
    form.reset();
    const form2 = document.getElementById("form_edit");
    form2.reset();
  };

  //Modal
  const [openAgg, setOpenAgg] = useState(false);
  const handleOpenAgg = () => {
    setOpenAgg(!openAgg);
    //reset();
  };

  //Modal
  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = () => {
    setOpenEdit(!openEdit);
    //reset();
  };

  //Modal
  const [openDel, setOpenDel] = useState(false);
  const handleOpenDel = () => setOpenDel(!openDel);

  //Editar
  const [item, setItem] = useState("");
  const [habitacion, setHabitacion] = useState("")

  //Eliminar user
  const [reservaIdToDelete, setreservaIdToDelete] = useState("");

  const [openDelreserva, setOpenDelreserva] = useState(false);
  const handleOpenDelreserva = () => setOpenDelreserva(!openDelreserva);

  
  const [reservaIdToEdit, setreservaIdToEdit] = useState("");
  const [HabitacionIdToEdit, setHabitacionIdToEdit] = useState("");
  
   const [openEdit_reserva, setOpenEdit_reserva] = useState(false);
   const handleOpenreserva = () => setOpenEdit_reserva(!openEdit_reserva);

  const [openEdit_user, setOpenEdit_user] = useState(false);
  const handleOpenEdit_reserva = () => {
    setOpenEdit_reserva(!openEdit_user);
    //reset();
  };


  //Modal Message
  const [openMessage, setOpenMessage] = useState(false);
  const handleOpenMessage = () => setOpenMessage(!openMessage);

  const handleClose = () => {
    if (status != 200) {
      handleOpenMessage();
      setMessage("");
      return;
    }
    handleOpenMessage();
    setOpenAgg(false);
    setOpenEdit(false);
    setOpenDel(false);
    setOpenDelreserva(false);
    setOpenEdit_reserva(false);
    setMessage("");
  };

  const [usuarios, setUsuarios] = useState([]);

  const Usuarios = async () => {
    const res = await fetch("http://localhost:4000/User");
    const data = await res.json();
    await setUsuarios(data);
  };

  return (
    <itemsContext.Provider
      value={{
        items,
        habitaciones,
        openAgg,
        setOpenAgg,
        handleOpenAgg,
        openEdit,
        setOpenEdit,
        handleOpenEdit,
        openDel,
        setOpenDel,
        handleOpenDel,
        openDelreserva,
        setOpenDelreserva,
        message,
        setMessage,
        status,
        setStatus,
        item,
        setItem,
        habitacion,
        setHabitacion,
        openMessage,
        setOpenMessage,
        handleClose,
        handleOpenMessage,
        setreservaIdToDelete,
        reservaIdToEdit,
        setreservaIdToEdit,
        filterCategory,
        setFilterCategory,
        Usuarios,
        usuarios,
        openEdit_reserva,
        setOpenEdit_reserva,
        handleOpenEdit_reserva,
      }}
    >
      <upitemsContext.Provider >
        <SearchContext.Provider value={setInputSearch}>
          {children}
        </SearchContext.Provider>
      </upitemsContext.Provider>
    </itemsContext.Provider>
  );
}
