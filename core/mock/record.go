// Code generated by moq; DO NOT EDIT.
// github.com/matryer/moq

package mock

import (
	"github.com/ohgodwynona/diary/core"
	"sync"
)

var (
	lockRecordStorageMockCreate sync.RWMutex
	lockRecordStorageMockDelete sync.RWMutex
	lockRecordStorageMockGet    sync.RWMutex
	lockRecordStorageMockGetAll sync.RWMutex
	lockRecordStorageMockUpdate sync.RWMutex
)

// Ensure, that RecordStorageMock does implement core.RecordStorage.
// If this is not the case, regenerate this file with moq.
var _ core.RecordStorage = &RecordStorageMock{}

// RecordStorageMock is a mock implementation of core.RecordStorage.
//
//     func TestSomethingThatUsesRecordStorage(t *testing.T) {
//
//         // make and configure a mocked core.RecordStorage
//         mockedRecordStorage := &RecordStorageMock{
//             CreateFunc: func(rec *core.Record) (*core.Record, error) {
// 	               panic("mock out the Create method")
//             },
//             DeleteFunc: func(id core.RecordID) error {
// 	               panic("mock out the Delete method")
//             },
//             GetFunc: func(id core.RecordID) (*core.Record, error) {
// 	               panic("mock out the Get method")
//             },
//             GetAllFunc: func() ([]*core.Record, error) {
// 	               panic("mock out the GetAll method")
//             },
//             UpdateFunc: func(rec *core.Record) (*core.Record, error) {
// 	               panic("mock out the Update method")
//             },
//         }
//
//         // use mockedRecordStorage in code that requires core.RecordStorage
//         // and then make assertions.
//
//     }
type RecordStorageMock struct {
	// CreateFunc mocks the Create method.
	CreateFunc func(rec *core.Record) (*core.Record, error)

	// DeleteFunc mocks the Delete method.
	DeleteFunc func(id core.RecordID) error

	// GetFunc mocks the Get method.
	GetFunc func(id core.RecordID) (*core.Record, error)

	// GetAllFunc mocks the GetAll method.
	GetAllFunc func() ([]*core.Record, error)

	// UpdateFunc mocks the Update method.
	UpdateFunc func(rec *core.Record) (*core.Record, error)

	// calls tracks calls to the methods.
	calls struct {
		// Create holds details about calls to the Create method.
		Create []struct {
			// Rec is the rec argument value.
			Rec *core.Record
		}
		// Delete holds details about calls to the Delete method.
		Delete []struct {
			// ID is the id argument value.
			ID core.RecordID
		}
		// Get holds details about calls to the Get method.
		Get []struct {
			// ID is the id argument value.
			ID core.RecordID
		}
		// GetAll holds details about calls to the GetAll method.
		GetAll []struct {
		}
		// Update holds details about calls to the Update method.
		Update []struct {
			// Rec is the rec argument value.
			Rec *core.Record
		}
	}
}

// Create calls CreateFunc.
func (mock *RecordStorageMock) Create(rec *core.Record) (*core.Record, error) {
	if mock.CreateFunc == nil {
		panic("RecordStorageMock.CreateFunc: method is nil but RecordStorage.Create was just called")
	}
	callInfo := struct {
		Rec *core.Record
	}{
		Rec: rec,
	}
	lockRecordStorageMockCreate.Lock()
	mock.calls.Create = append(mock.calls.Create, callInfo)
	lockRecordStorageMockCreate.Unlock()
	return mock.CreateFunc(rec)
}

// CreateCalls gets all the calls that were made to Create.
// Check the length with:
//     len(mockedRecordStorage.CreateCalls())
func (mock *RecordStorageMock) CreateCalls() []struct {
	Rec *core.Record
} {
	var calls []struct {
		Rec *core.Record
	}
	lockRecordStorageMockCreate.RLock()
	calls = mock.calls.Create
	lockRecordStorageMockCreate.RUnlock()
	return calls
}

// Delete calls DeleteFunc.
func (mock *RecordStorageMock) Delete(id core.RecordID) error {
	if mock.DeleteFunc == nil {
		panic("RecordStorageMock.DeleteFunc: method is nil but RecordStorage.Delete was just called")
	}
	callInfo := struct {
		ID core.RecordID
	}{
		ID: id,
	}
	lockRecordStorageMockDelete.Lock()
	mock.calls.Delete = append(mock.calls.Delete, callInfo)
	lockRecordStorageMockDelete.Unlock()
	return mock.DeleteFunc(id)
}

// DeleteCalls gets all the calls that were made to Delete.
// Check the length with:
//     len(mockedRecordStorage.DeleteCalls())
func (mock *RecordStorageMock) DeleteCalls() []struct {
	ID core.RecordID
} {
	var calls []struct {
		ID core.RecordID
	}
	lockRecordStorageMockDelete.RLock()
	calls = mock.calls.Delete
	lockRecordStorageMockDelete.RUnlock()
	return calls
}

// Get calls GetFunc.
func (mock *RecordStorageMock) Get(id core.RecordID) (*core.Record, error) {
	if mock.GetFunc == nil {
		panic("RecordStorageMock.GetFunc: method is nil but RecordStorage.Get was just called")
	}
	callInfo := struct {
		ID core.RecordID
	}{
		ID: id,
	}
	lockRecordStorageMockGet.Lock()
	mock.calls.Get = append(mock.calls.Get, callInfo)
	lockRecordStorageMockGet.Unlock()
	return mock.GetFunc(id)
}

// GetCalls gets all the calls that were made to Get.
// Check the length with:
//     len(mockedRecordStorage.GetCalls())
func (mock *RecordStorageMock) GetCalls() []struct {
	ID core.RecordID
} {
	var calls []struct {
		ID core.RecordID
	}
	lockRecordStorageMockGet.RLock()
	calls = mock.calls.Get
	lockRecordStorageMockGet.RUnlock()
	return calls
}

// GetAll calls GetAllFunc.
func (mock *RecordStorageMock) GetAll() ([]*core.Record, error) {
	if mock.GetAllFunc == nil {
		panic("RecordStorageMock.GetAllFunc: method is nil but RecordStorage.GetAll was just called")
	}
	callInfo := struct {
	}{}
	lockRecordStorageMockGetAll.Lock()
	mock.calls.GetAll = append(mock.calls.GetAll, callInfo)
	lockRecordStorageMockGetAll.Unlock()
	return mock.GetAllFunc()
}

// GetAllCalls gets all the calls that were made to GetAll.
// Check the length with:
//     len(mockedRecordStorage.GetAllCalls())
func (mock *RecordStorageMock) GetAllCalls() []struct {
} {
	var calls []struct {
	}
	lockRecordStorageMockGetAll.RLock()
	calls = mock.calls.GetAll
	lockRecordStorageMockGetAll.RUnlock()
	return calls
}

// Update calls UpdateFunc.
func (mock *RecordStorageMock) Update(rec *core.Record) (*core.Record, error) {
	if mock.UpdateFunc == nil {
		panic("RecordStorageMock.UpdateFunc: method is nil but RecordStorage.Update was just called")
	}
	callInfo := struct {
		Rec *core.Record
	}{
		Rec: rec,
	}
	lockRecordStorageMockUpdate.Lock()
	mock.calls.Update = append(mock.calls.Update, callInfo)
	lockRecordStorageMockUpdate.Unlock()
	return mock.UpdateFunc(rec)
}

// UpdateCalls gets all the calls that were made to Update.
// Check the length with:
//     len(mockedRecordStorage.UpdateCalls())
func (mock *RecordStorageMock) UpdateCalls() []struct {
	Rec *core.Record
} {
	var calls []struct {
		Rec *core.Record
	}
	lockRecordStorageMockUpdate.RLock()
	calls = mock.calls.Update
	lockRecordStorageMockUpdate.RUnlock()
	return calls
}
