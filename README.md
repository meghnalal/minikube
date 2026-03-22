# Kubernetes Learning Project 🚀

A simple React application used as a practical playground for learning Kubernetes concepts hands on with Minikube.

## Overview

This project contains a minimal React frontend paired with a collection of Kubernetes YAML manifests. The goal is not the app itself — it's everything around it. Each YAML file demonstrates a different Kubernetes concept so you can apply them one by one and see the results in real time.

## Prerequisites

Make sure you have the following installed before getting started:

- [Docker](https://www.docker.com/)
- [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Node.js](https://nodejs.org/) (if running the app locally outside of Kubernetes)

## Getting Started

Start your Minikube cluster:
```bash
minikube start
```

Enable the Ingress addon:
```bash
minikube addons enable ingress
```

Add the local domain to your `/etc/hosts` file:
```bash
echo "127.0.0.1 myapp.local" | sudo tee -a /etc/hosts
```

Start the Minikube tunnel (required for Ingress on Mac):
```bash
minikube tunnel
```

## YAML Manifests

Each file in the repo demonstrates a specific Kubernetes concept:

| File | Concept |
|---|---|
| `pod.yaml` | Deploying a standalone Pod |
| `replicaset.yaml` | Managing Pod replicas with a ReplicaSet |
| `deployment.yaml` | Rolling updates and self healing with a Deployment |
| `service-clusterip.yaml` | Internal cluster communication with ClusterIP |
| `service-nodeport.yaml` | Exposing the app externally with NodePort |
| `service-loadbalancer.yaml` | Load balancing with a LoadBalancer Service |
| `ingress.yaml` | Routing external HTTP traffic with Ingress |

## Applying the Manifests

Apply any manifest with:
```bash
kubectl apply -f <filename>.yaml
```

Check your pods are running:
```bash
kubectl get pods
```

Check your services:
```bash
kubectl get services
```

Check your ingress:
```bash
kubectl get ingress
```

## Accessing the App

Via NodePort:
```bash
minikube service react-service --url
```

Via Ingress:
```
http://myapp.local
```

## Cleaning Up

To delete all resources:
```bash
kubectl delete -f <filename>.yaml
```

To stop Minikube:
```bash
minikube stop
```

## Related Article

This project accompanies the article **"Kubernetes for Beginners"** which walks through every concept covered here in depth with explanations and real world examples.