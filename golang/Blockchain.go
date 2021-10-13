package golang

import (
	"io/ioutil"
	"os"
	"path/filepath"
)

type Account string

type Tx struct {
	From  Account `json:"from"`
	To    Account `json:"to"`
	Value uint    `json:"value"`
	Data  string  `json:"data"`
}

func (t Tx) IsReward() bool {
	return t.Data == "reward"
}

// Stores user balances of token transfers between whom
type State struct {
	Balances  map[Account]uint
	txMempool []Tx

	dbFile *os.File
}

type Genesis struct {
	Balances map[string]uint `json:"balances"`
}

// Constuct state by reading in balances from genesis.json file
func NewStateFromDisk() ([]byte, error) {
	cwd, err := os.Getwd()
	if err != nil {
		return nil, err
	}

	genFilePath := filepath.Join(cwd, "database", "genesis.json")
	content, err := ioutil.ReadFile(genFilePath)
	if err != nil {
		return nil, err
	}

	return content, nil
}
