const { rejects } = require('assert')
const fs = require('fs')
const path = require("path")

const fileName = "products.js"
const filePath = path.join(__dirname, "..", "db", fileName)

class productsRepository {
    static async getProduct() {
        return new Promise((resolve, reject) => {
            fs.readFileSync(filePath, 'uft-8', (err, data) => {
                if (err) {
                    if(err.code === "ENOENT") {
                        this.writeProductsToFile([])
                        return[]
                    } else {
                        reject(err)
                    }
                } else {
                    resolve(JSON.parse(data))
                }
            })
        })
    }

    static async writeProductsToFile(products) {
        return new Promise((resolve, reject) => {
            fs.writeFile(filePath, JSON.stringify(products), (err) => {
                if(err) reject(err)
                console.log('Data written to file: %{filePath}')
                path.resolve(this.getAllProducts())
            })
        })
    }
}