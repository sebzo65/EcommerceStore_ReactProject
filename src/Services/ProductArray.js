import firestore from "./firestore";

//Clean a product record
const cleanRecord = (docSnapshot) => ({
  id: docSnapshot.id,
  ...docSnapshot.data(),
});

//clean multiple product records
const cleanRecords = (querySnapshot) => {
  return querySnapshot.docs.map(cleanRecord);
};

//Get all products from firestore
export const getProducts = async () => {
  //Collection Reference
  const colRef = firestore.collection("products");
  //Promise<QuerySnapshot> -> QuerySnapshot
  const snapshot = await colRef.get();
  //Array<QueryDocumentSnapshot> -> Array<T>
  return cleanRecords(snapshot);
};

//Get a specific product from firestore
export const findProduct = async (id) => {
  //Collection Reference
  const colRef = firestore.collection("products");
  //Document Reference
  const docRef = colRef.doc(id);
  //Promise<DocumentSnapshot> -> DocumentSnapshot
  const docSnap = await docRef.get();

  //T -> Customer Object
  return cleanRecord(docSnap);
};

//Updating record in database
export const updateProduct = async (id, partial) => {
  const colRef = firestore.collection("products");
  const docRef = colRef.doc(id);
  await docRef.update(partial);
};

//Get a specific homeImg from firestore
export const findHomeProduct = async (id) => {
  //Collection Reference
  const colRef = firestore.collection("homeProducts");
  //Document Reference
  const docRef = colRef.doc(id);
  //Promise<DocumentSnapshot> -> DocumentSnapshot
  const docSnap = await docRef.get();

  //T -> Customer Object
  return cleanRecord(docSnap);
};

//creating record in database for cart
export const createCartItem = async (id) => {
  // CollectionReference
  const colRef = firestore.collection("cart");
  // DocumentReference
  const docRef = colRef.doc();
  await docRef.set(id);
};
