package core_domain

type Customer struct {
	ID      string
	UserId  string
	Version int

	FirstName *string
	LastName  *string
}

func NewCustomer(
	id string,
	version int,
	userId string,
	firstName *string,
	lastName *string,
) Customer {
	return Customer{
		ID:        id,
		UserId:    userId,
		Version:   version,
		FirstName: firstName,
		LastName:  lastName,
	}
}

func NewCustomerUninitialized(
	userId string,
	firstName *string,
	lastName *string,
) Customer {
	return NewCustomer(
		UninitializedID,
		UninitializedVersion,
		userId,
		firstName,
		lastName,
	)
}
