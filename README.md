# 📘 FIXING KUBENERTES-SUPABASE

This repository contains fixes for the values.yaml file and an additional configuration file for local-path-storage, which serves as a storage class.
---

## ✨ Feauture
- ✅ Change 1: Fixed errors in the values.yaml file when deploying Supabase
- ✅ Change 2: Added local-path-storage as the storage class for Supabase

---

## 📦 Installation

Clone this repository:

```bash
git clone https://github.com/raikamil07/Kubespray-supabase-init5.git
cd Kubespray-supabase-init5
```

Next, navigate into the charts/supabase directory:

```plaintext
project-name/
├── .github/
├── build/
├── charts/
├── supabase/
├── .helmignore
├── LICENSE
├── README.md
├── build.sh
└── index.yaml
```
Install Helm first by following the official documentation: https://helm.sh/docs/intro/install/

After that install supabae using helm
```bash
helm install supabase -f values.yaml -n supabase
```
Wait for the process to complete.
