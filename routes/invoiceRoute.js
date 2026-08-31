import express from "express";
import {
  createInvoice,
  deleteAdminInvoice,
  generateInvoicePdf,
  getAdminInvoiceById,
  getAdminSales,
  searchAdminInvoices,
  sendInvoiceViaWhatsapp,
  updateAdminInvoice
} from "../controllers/invoiceController.js";
import adminAuth from "../middleware/adminAuth.js";

const invoiceRouter = express.Router();

invoiceRouter.post("/create", createInvoice);
invoiceRouter.post("/generate-pdf", generateInvoicePdf);
invoiceRouter.post("/send-whatsapp", sendInvoiceViaWhatsapp);

invoiceRouter.get("/admin/sales", adminAuth, getAdminSales);
invoiceRouter.post("/admin/sales", adminAuth, getAdminSales);

invoiceRouter.get("/admin/search", adminAuth, searchAdminInvoices);
invoiceRouter.post("/admin/search", adminAuth, searchAdminInvoices);

invoiceRouter.post("/admin/delete", adminAuth, deleteAdminInvoice);
invoiceRouter.post("/admin/update/:id", adminAuth, updateAdminInvoice);

invoiceRouter.get("/admin/:id", adminAuth, getAdminInvoiceById);

export default invoiceRouter;
