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