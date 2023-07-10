import Box from "@mui/material/Box";
import { ToolType } from "./tools/page";

export interface RentalAgreementType {
  id: number;
  tool: ToolType;
  rentalRequestDTO: {
    id: number;
    toolCode: string;
    days: number;
    discount: number;
    startDate: string;
  },
  dueDate: string;
  chargeDays: number;
  preDiscountCharge: number;
  discountAmount: number;
  finalAmount: number;
};

export default function RentalAgreement(rentalAgreement: RentalAgreementType) {
  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          rowGap: 1,
          alignItems: 'center',
          '> p': {
            margin: 0,
            borderBottom: 1
          }
        }}
      >
        <p>Tool Code:</p>
        <p>{rentalAgreement.tool.code}</p>
        <p>Tool Type:</p>
        <p>{rentalAgreement.tool.type}</p>
        <p>Tool brand:</p>
        <p>{rentalAgreement.tool.brand}</p>
        <p>Rental Days:</p>
        <p>{rentalAgreement.rentalRequestDTO.days}</p>
        <p>Checkout Date:</p>
        <p>{new Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(new Date(rentalAgreement.rentalRequestDTO.startDate))}</p>
        <p>Due Date:</p>
        <p>{new Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(new Date(rentalAgreement.dueDate))}</p>
        <p>Daily Rental Charge:</p>
        <p>{rentalAgreement.tool.dailyCharge.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
        <p>Charge Days:</p>
        <p>{rentalAgreement.chargeDays}</p>
        <p>Daily Rental Charge:</p>
        <p>{rentalAgreement.tool.dailyCharge.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
        <p>Pre-Discount Charge:</p>
        <p>{rentalAgreement.preDiscountCharge.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
        <p>Discount Percent:</p>
        <p>{`${rentalAgreement.rentalRequestDTO.discount}%`}</p>
        <p>Discount amount:</p>
        <p>{rentalAgreement.discountAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
        <p>Final Charge</p>
        <p>{rentalAgreement.finalAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
      </Box>
    </>
  );
}