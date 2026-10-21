package core_domain

type Candidate struct {
	ID      string
	Version int32

	Email       string
	UserName    string
	Password    string
	Role        Role
	TraceId     string
	ActionToken *string
}

func NewCandidate(
	id string,
	version int32,
	email string,
	userName string,
	password string,
	actionToken *string,
	roleID string,
	roleName string,
	traceId string,
) *Candidate {
	return &Candidate{
		ID:          id,
		Version:     version,
		Email:       email,
		UserName:    userName,
		Password:    password,
		ActionToken: actionToken,
		Role:        Role{ID: roleID, Name: roleName},
		TraceId:     traceId,
	}
}

func NewCandidateUninitialized(
	email string,
	userName string,
	password string,
	role string,
	traceId string,
) *Candidate {
	return NewCandidate(
		UninitializedID,
		int32(UninitializedVersion),
		email,
		userName,
		password,
		nil,
		UninitializedID,
		role,
		traceId,
	)
}

type CandidateCacheType struct {
	Candidate          CandidateSession
	RegistrationStatus RegistrationStatus
}
type RegistrationStatus struct {
	Step     string
	Progress int32
	Message  string
}
type CandidateSession struct {
	ID          string
	Email       string
	UserName    string
	Role        Role
	TraceID     string
	ActionToken *string
}

func NewCandidateSession(
	id string,
	userName string,
	email string,
	role Role,
	traceID string,
	actionToken *string,
	step string,
	progress int32,
	message string,
) *CandidateCacheType {
	return &CandidateCacheType{
		Candidate: CandidateSession{
			ID:          id,
			UserName:    userName,
			Email:       email,
			Role:        role,
			TraceID:     traceID,
			ActionToken: actionToken,
		},
		RegistrationStatus: RegistrationStatus{
			Step:     step,
			Progress: progress,
			Message:  message,
		},
	}
}
