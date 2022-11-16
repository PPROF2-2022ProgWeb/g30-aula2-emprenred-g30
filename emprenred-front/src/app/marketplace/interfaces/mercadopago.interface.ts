export interface VentaMP {
    response:            Response;
    id:                  string;
    items:               Item[];
    payer:               Payer;
    clientID:            string;
    paymentMethods:      PaymentMethods;
    backUrls:            BackUrls;
    shipments:           Shipments;
    notificationURL:     null;
    statementDescriptor: null;
    externalReference:   string;
    expires:             boolean;
    dateOfExpiration:    null;
    expirationDateFrom:  null;
    expirationDateTo:    null;
    collectorID:         number;
    marketplace:         string;
    marketplaceFee:      number;
    additionalInfo:      string;
    autoReturn:          string;
    operationType:       string;
    differentialPricing: null;
    processingModes:     null;
    binaryMode:          boolean;
    taxes:               null;
    tracks:              null;
    metadata:            Metadata;
    initPoint:           string;
    sandboxInitPoint:    string;
    dateCreated:         Date;
}

export interface BackUrls {
    success: string;
    pending: string;
    failure: string;
}

export interface Item {
    id:          string;
    title:       string;
    description: string;
    pictureURL:  null;
    categoryID:  string;
    quantity:    number;
    unitPrice:   number;
    currencyID:  string;
}

export interface Metadata {
}

export interface Payer {
    name:           string;
    surname:        string;
    email:          string;
    phone:          Phone;
    identification: Identification;
    address:        Address;
    dateCreated:    null;
    lastPurchase:   null;
}

export interface Address {
    zipCode:      string;
    streetName:   string;
    streetNumber: null;
}

export interface Identification {
    type:   string;
    number: string;
}

export interface Phone {
    areaCode: string;
    number:   string;
}

export interface PaymentMethods {
    excludedPaymentMethods: ExcludedPayment[];
    excludedPaymentTypes:   ExcludedPayment[];
    defaultPaymentMethodID: null;
    installments:           null;
    defaultInstallments:    null;
}

export interface ExcludedPayment {
    id: string;
}

export interface Response {
    statusCode: number;
    headers:    { [key: string]: string[] };
    content:    string;
}

export interface Shipments {
    mode:                  null;
    localPickup:           null;
    dimensions:            null;
    defaultShippingMethod: null;
    freeMethods:           null;
    cost:                  null;
    freeShipping:          null;
    receiverAddress:       ReceiverAddress;
    expressShipment:       null;
}

export interface ReceiverAddress {
    zipCode:      string;
    streetName:   string;
    streetNumber: null;
    countryName:  null;
    stateName:    null;
    floor:        string;
    apartment:    string;
    cityName:     null;
}
