import report from '@wdio/allure-reporter'

//Method used to log all the steps to the allure report
export const addLog = (log: string) => {
    report.addStep(`Step: ${log}`)
    console.log(`Step: ${log}`)
}