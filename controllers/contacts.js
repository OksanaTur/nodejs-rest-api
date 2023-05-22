const {Contact} = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAllContacts = async (req, res) => {
  const result = await Contact.find({}, "-createdAt -updatedAt");
    res.json(result);
};

const getContactById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findById(contactId);
    if (!result) {
        throw HttpError(404, `Book with ${contactId} not found`)
    }
    res.json(result);
};

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);

  if (!result) {
    throw HttpError(404, `Book with ${contactId} not found`);
  }

  res.status(200).json({
    message: "Delete success",
  });
};

const addContact = async (req, res) => {
    const result = await Contact.create(req.body);
    res.status(201).json(result);
};

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});

  if (!result) {
    throw HttpError(404, `Book with ${contactId} not found`);
  }
  res.json(result);
};

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});

  if (!result) {
    throw HttpError(404, `Book with ${contactId} not found`);
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  deleteContactByID: ctrlWrapper(removeContact),
  addContact: ctrlWrapper(addContact),
  updateContact: ctrlWrapper(updateContact),
  updateFavorite: ctrlWrapper(updateFavorite),
};